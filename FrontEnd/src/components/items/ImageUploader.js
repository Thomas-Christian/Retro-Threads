import React from "react"
import {Buffer} from 'buffer';

export const ImageUploader = ({setIsSelected, isSelected, setSelectedFile, selectedFile, setItem, item}) => {

   
    const changeHandler = (e) => {

        let file = e.target.files[0]

        setSelectedFile(file)
        setIsSelected(true)
        
        if (file) { 
            readFile(file) }
        
    }

    const readFile = (file) => {

        const fileReader = new FileReader();

        fileReader.readAsArrayBuffer(file);

        fileReader.onloadend = () => {

          let fileContent = fileReader.result;

          let encodedFile = Buffer.from(fileContent).toString('base64')

          //console.log(encodedFile)
        
          setItem({ ...item, img: encodedFile })

        };
    };

    
    return ( 
    <div> 
        <input type={'file'} name='file' accept="image/*" onChange={changeHandler} />
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