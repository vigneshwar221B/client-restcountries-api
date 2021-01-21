import React from 'react'
import {Card, ListGroup, ListGroupItem} from 'react-bootstrap'

const CardView = (props) => {
    return (
            <Card style={{ width: '18rem', minHeight: '75vh' }}>
                <Card.Img variant="top" src={props.data.flag} />
                <Card.Body>
                    <Card.Title>{props.data.name}</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Capital: {props.data.capital}</ListGroupItem>
                    <ListGroupItem>Region: {props.data.region}</ListGroupItem>
                    <ListGroupItem>Subregion: {props.data.subregion}</ListGroupItem>
                    <ListGroupItem>TimeZone: {props.data.timezones[0]}</ListGroupItem>
                    <ListGroupItem>Population: {props.data.population}</ListGroupItem>
                    <ListGroupItem>Native Name: {props.data.nativeName}</ListGroupItem>
                    <ListGroupItem>Numeric Code: {props.data.numericCode}</ListGroupItem>
                    <ListGroupItem>Other names: {Object.keys(props.data.translations).map((el,i) => {
                            if(i === Object.keys(props.data.translations).length -1)
                              return el+'. '
                            else
                                return el + ', '
                            })}</ListGroupItem>
                    <ListGroupItem>Lat & Lng: {props.data.latlng[0]}, {props.data.latlng[1]}</ListGroupItem>
                </ListGroup>
            </Card>
        
    )
}

export default CardView
