import React, {Component} from 'react';

import PetCard from './pet-card';

export default class PetList extends Component{
    render(){


        const animais = [{"id":1,"name":"Kenneth Flores","image":"https://robohash.org/undedoloresquo.png?size=250x250&set=set1","description":"Diabetes due to undrl cond w severe nonprlf diabetic rtnop"},
            {"id":2,"name":"Diane Anderson","image":"https://robohash.org/enimdolornon.bmp?size=250x250&set=set1","description":"Complete traumatic trnsphal amp of r little finger, subs"},
            {"id":3,"name":"Christopher Jackson","image":"https://robohash.org/ducimusaspernaturatque.bmp?size=250x250&set=set1","description":"Displ oblique fx shaft of unsp fibula, 7thJ"},
            {"id":4,"name":"Eugene Washington","image":"https://robohash.org/inventoreporroperspiciatis.jpg?size=250x250&set=set1","description":"Sprain of interphalangeal joint of unsp finger, sequela"},
            {"id":5,"name":"Bonnie Austin","image":"https://robohash.org/perferendisquosducimus.bmp?size=250x250&set=set1","description":"Unsp open wound of unsp external genital organs, female"},
            {"id":6,"name":"Tammy Holmes","image":"https://robohash.org/quisitnam.jpg?size=850x850&set=set1","description":"Oth stimulant abuse w stimulant-induced sexual dysfunction"},
            {"id":7,"name":"Jack Reed","image":"https://robohash.org/praesentiumdeseruntillo.png?size=250x250&set=set1","description":"Breakdown (mechanical) of other vascular grafts"},
            {"id":8,"name":"Carol Adams","image":"https://robohash.org/quaeratquiconsequatur.jpg?size=250x250&set=set1","description":"Corrosions involving 60-69% of body surface"},
            {"id":9,"name":"Norma Robertson","image":"https://robohash.org/exercitationemabesse.bmp?size=250x250&set=set1","description":"Spinal instabilities, lumbosacral region"},
            {"id":10,"name":"Irene Knight","image":"https://robohash.org/quiaaliasnihil.png?size=250x250&set=set1","description":"Nondisp fx of body of unsp talus, subs for fx w nonunion"}];


        return(
        <div className="ui container">
            <div className="ui special three stackable cards">
                {animais.map(this.renderPet)}
            </div>
            {this.props.children}
        </div>
        )
    }

    renderPet(animal){
        return (<PetCard animal={animal} key={animal.id} /> )
    }
}