import React from 'react'
import {Col} from 'react-bootstrap'
import CardView from './CardView'

const Result = (props) => {

    const finalResult = (resultData) => {

        if(resultData){
            if(Array.isArray(resultData.data)){
                return (<>
                    {resultData.data.map(el => {
                    return (
                        <Col>
                            <CardView data={el} />
                        </Col>
                        )
                    })  
                    }
                    </>
                )
            }else{
                return (<Col>
                <CardView data={resultData.data} />
            </Col>)
            }
        }
        return <></>
        

    }

    return (
        <>
            { finalResult(props.result) }
        </>
    )
}

export default Result