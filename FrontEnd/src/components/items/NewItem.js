import { useState, useContext } from "react"
import { CurrentUser } from '../../contexts/CurrentUser';

export default function NewItem() {

    const { currentUser } = useContext(CurrentUser)

	const [item, setItem] = useState({
		name: '',
		articleOfClothing: '',
		styleCategory: '',
		color: '',
        size: '',
		user: `${currentUser.id}`
	})

	async function handleSubmit(e) {
		e.preventDefault()

		await fetch(`http://localhost:5000/item/new`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(item)
		})
	}

    let addItem = (
        <>
        <h1> 
            Please Sign In to post an Item
        </h1>
        </>
    )

    if(currentUser) {
        addItem = (
            <main>
			<h1>Post Your Item</h1>
			<form onSubmit={handleSubmit}>
				<div className="row">
					<div className="col-sm-6 form-group">
						<label htmlFor="itemTitle">Title</label>
						<input
							required
							value={item.name}
							onChange={e => setItem({ ...item, name: e.target.value })}
							className="form-control"
							id="itemTitle"
							name="itemTitle"
						/>
					</div>
					<div className="col-sm-6 form-group">
						<label htmlFor="itemType">Type</label>
						<input
							required
							value={item.articleOfClothing}
							onChange={e => setItem({ ...item, articleOfClothing: e.target.value })}
							className="form-control"
							id="itemType"
							name="itemType"
						/>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-6 form-group">
						<label htmlFor="itemStyle">Style</label>
						<select 
                        id="itemStyle" 
                        className="itemStyle"
                        value={item.styleCategory}
                        onChange={e => setItem({ ...item, styleCategory: e.target.value })}>

                                <option value={"Y2K"}> Y2K </option>
                                <option value={"Streetwear"}> Streetwear </option>
                                <option value={"Designer"}> Designer </option>
                                <option value={"Vintage"}> Vintage </option>

                        </select>
					</div>
				</div>
				<input className="btn btn-primary" type="submit" value="Post" />
			</form>
		</main>
        )
    }

    return (
        <> 
        { addItem }
        </>
    )

}
