import React from "react"

export const ImageUploader = ({setItem, item}) => {

    let imageArray = []
    
    const changeHandler = (e) => {

        let files = e.target.files

        // setSelectedFile(file)
        // setIsSelected(true)
        
        if (files) { 
            for (var i = 0; i < files.length; i++) {
                readFile(files[i]);
            }

            setItem({ ...item, img: imageArray })
        }


    }

    const readFile = (file) => {

        const fileReader = new FileReader();

        fileReader.readAsDataURL(file);

        fileReader.onloadend = () => {

          let fileContent = fileReader.result;

          imageArray.push(fileContent)


        };
    };

    
    return ( 
    <div className="flex"> 
        <input className="form-input-style w-full file:mr-3 file:rounded-full file:bg-primary file:text-sm file:text-secondary" multiple type={'file'} name='file' accept="image/*" onChange={changeHandler} />
    </div>
    )
}