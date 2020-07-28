
import React from 'react'
import ReactDOM from 'react-dom'
import { Container as Example1 } from '../Example1/Container'
import { Container as Example2 } from '../Example2/Container'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

const Home = (props: any) => {

    return (
        <div>
            <DndProvider backend={HTML5Backend}>
                <Example1 />
                <Example2 />
            </DndProvider>
        </div>

    );
}

export default Home