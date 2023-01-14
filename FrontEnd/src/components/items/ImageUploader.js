import React from "react"
import {Buffer} from 'buffer';

export const ImageUploader = ({setIsSelected, isSelected, setSelectedFile, selectedFile, setItem, item}) => {

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

        fileReader.readAsArrayBuffer(file);

        fileReader.onloadend = () => {

          let fileContent = fileReader.result;

          let encodedFile = Buffer.from(fileContent).toString('base64')

          imageArray.push(encodedFile)

          //console.log(imageArray)

        };
    };

    
    return ( 
    <div> 
        <input multiple type={'file'} name='file' accept="image/*" onChange={changeHandler} />
        {isSelected ? (
            <div>
                <p>Filename: {selectedFile.name}</p>
                <p>Filetype: {selectedFile.type}</p>
                <p>Size in bytes: {selectedFile.size}</p>
                <p>
                    lastModifiedDate:{' '}
                    {selectedFile.lastModifiedDate.toLocaleDateString()}
                </p>
            </div>
        ) : (
            <p>Select a file to show details</p>
        )}
    </div>
    )
}