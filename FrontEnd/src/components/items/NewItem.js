import React, { useState, useContext } from "react"
import { useNavigate } from 'react-router-dom';
import { CurrentUser } from '../../contexts/CurrentUser';
import { ImageUploader } from './ImageUploader'

export default function NewItem() {

	const navigate = useNavigate();

    const { currentUser } = useContext(CurrentUser)

	const [item, setItem] = useState({
		name: '',
		articleOfClothing: 'Pants',
		styleCategory: 'Vintage',
		color: '',
        size: '',
		user: `${currentUser ? `${currentUser.id}` : `null`}`,
		img: []
	})

	const [selectedFile, setSelectedFile] = useState()
	const [isSelected, setIsSelected] = useState(false)

	
	async function handleSubmit(e) {
		e.preventDefault()

		//console.log(item)
		
		await fetch(`http://localhost:5000/item/new`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(item)
			
		})

		navigate('/')

	}

    // let addItem = (
    //     <>
    //     <h1> 
    //         Please Sign In to post an Item
    //     </h1>
    //     </>
    // )

    // if(currentUser) {
    //     addItem = (
            
    //     )
    // }

    return (

			<div className="flex flex-col h-screen ml-[3.25rem] items-center justify-center px-6 py-8">

			<div className="w-full bg-slate-300 rounded-lg shadow md:mt-0 sm:max-w-lg xl:p-0">

			<h1 className="text-xl text-center underline font-bold p-2 leading-tight tracking-tight text-gray-900 md:text-2xl">
				Post Your Item </h1>

			<form onSubmit={handleSubmit} className="m-1 space-y-4 md:space-y-6 p-2">

				<div className="form-group">
					<label htmlFor="itemTitle" className="block text-sm font-medium text-gray-900"> Title: </label>
					<input
						required
						value={item.name}
						onChange={e => setItem({ ...item, name: e.target.value })}
						id="itemTitle"
						name="itemTitle"
						className="form-input-style"
					/>
				</div>

				<div className="form-group">

					<div className="flex">
					<label htmlFor="itemStyle" className="w-3/5 form-label-style"> Style: </label>
					<label htmlFor="itemType" className="w-1/2 form-label-style"> Type: </label>
					</div>

					<div className="flex justify-between"> 
					<select 
						id="itemStyle" 
						className="form-input-style w-1/2"
						defaultValue={item.styleCategory}
						onChange={e => setItem({ ...item, styleCategory: e.target.value })}>

							<option className="text-sm" value={"Y2K"}> Y2K </option>
							<option className="text-sm" value={"Streetwear"}> Streetwear </option>
							<option className="text-sm" value={"Designer"}> Designer </option>
							<option className="text-sm" value={"Vintage"}> Vintage </option>

					</select>

					<select 
						id="itemType" 
						className="form-input-style w-1/2"
						defaultValue={item.articleOfClothing}
						onChange={e => setItem({ ...item, articleOfClothing: e.target.value })}>

							<option className="text-sm" value={"Dress"}> Dress </option>
							<option className="text-sm" value={"Top"}> Top </option>
							<option className="text-sm" value={"Pants"}> Pants </option>
							<option className="text-sm" value={"Shorts"}> Shorts </option>
							<option className="text-sm" value={"Skirt"}> Skirt </option>
							<option className="text-sm" value={"Outerwear"}> Outerwear </option>
							<option className="text-sm" value={"Shoes"}> Shoes </option>
							
					</select>
					
					</div>

				</div>

				<div className="form-group">
					<div className="flex"> 
						<label htmlFor="itemColor" className="w-1/2 form-label-style"> Color: </label>
						<label htmlFor="itemColor" className="w-1/2 form-label-style"> Size: </label>
					</div>

					<div className="flex justify-between"> 
					<input
						required
						value={item.color}
						onChange={e => setItem({ ...item, color: e.target.value })}
						id="itemTitle"
						name="itemTitle"
						className="form-input-style"
					/>
					
					<input
						required
						value={item.size}
						onChange={e => setItem({ ...item, size: e.target.value })}
						id="itemTitle"
						name="itemTitle"
						className="form-input-style"
					/>
					</div>
				</div>

				<div className="form-group">
					<label htmlFor="itemDescription" className="block text-sm font-medium text-gray-900"> Description: </label>
					<input
						required
						value={item.description}
						onChange={e => setItem({ ...item, description: e.target.value })}
						id="itemDescription"
						name="itemDescription"
						className="form-input-style"
					/>
				</div>

				<div className="form-group">

					<label htmlFor="itemImage" className="form-label-style"> Upload Images: </label>

					<ImageUploader 
						selectedFile = {selectedFile}
						setSelectedFile = {setSelectedFile}
						setIsSelected = {setIsSelected}
						isSelected = {isSelected}
						setItem = {setItem}
						item = {item}
					/>

				</div>


				
			<div className="flex"> 
			<button className="btn-primary" 
			onClick={handleSubmit}> Submit </button>
			</div>

			</form>
			</div>

			</div>

    )

}
