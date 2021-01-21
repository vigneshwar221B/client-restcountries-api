import React, {useState} from 'react'
import {Button, FormControl, InputGroup, Dropdown, DropdownButton} from 'react-bootstrap'
import Axios from 'axios'

const Search = (props) => {

    const [keyword, setKeyword] = useState('')
    const [typeKey, setType] = useState('name')

    const onchangeHandler = (newKeyword) => {
        setKeyword(newKeyword.target.value)
    }

    const onSubmitHandler = async() => {
        let reqUrl;
        if(typeKey === 'all'){
            reqUrl = `${props.baseUrl}/${typeKey}`
        }else if(typeKey=== 'fullname'){
            reqUrl = `${props.baseUrl}/name/${keyword}?fullText=true`
        }else if(typeKey=== 'codes'){
            reqUrl = `${props.baseUrl}/alpha?codes=${keyword}`
        }else{
            reqUrl = `${props.baseUrl}/${typeKey}/${keyword}`
        }
        try{
            const data = await Axios.get(reqUrl)
            console.log(data);
            props.sendBack(data)
        }catch{
            console.log('bad request');
            props.setShow(true)
        }
    }

    return (
        <div>
            <InputGroup className="mb-3">
                <DropdownButton
                as={InputGroup.Prepend}
                variant="outline-secondary"
                title={typeKey}
                id="input-group-dropdown-1"
                onSelect={(ev)=>{setType(ev)}}
                >
                    <Dropdown.Item href="#" eventKey="name">name</Dropdown.Item>
                    <Dropdown.Item href="#" eventKey="alpha">code</Dropdown.Item>
                    <Dropdown.Item href="#" eventKey="currency">currency</Dropdown.Item>
                    <Dropdown.Item href="#" eventKey="lang">language</Dropdown.Item>
                    <Dropdown.Item href="#" eventKey="capital">capital city</Dropdown.Item>
                    <Dropdown.Item href="#" eventKey="region">region</Dropdown.Item>
                    <Dropdown.Item href="#" eventKey="regionalbloc">regional bloc</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#" eventKey="all">list all</Dropdown.Item>
                    <Dropdown.Item href="#" eventKey="fullname">Full name</Dropdown.Item>
                    <Dropdown.Item href="#" eventKey="codes">list of codes: (seperate the codes by ;)</Dropdown.Item>
                    
                </DropdownButton>
                <FormControl
                placeholder={typeKey}
                aria-label={typeKey}
                aria-describedby="basic-addon2"
                value={keyword}
                onChange={onchangeHandler}
                />
                <InputGroup.Append>
                    <Button variant="outline-secondary" onClick={onSubmitHandler}>submit</Button>
                </InputGroup.Append>
            </InputGroup>
        </div>
    )
}

export default Search