import React, {Component} from "react";

export default class Home extends Component{


    render(){

        const statistics = [
            {
                icon: "child blue",
                value: "257",
                description: "Volunteers"
            },
            {
                icon: "heart red",
                value: "15",
                description: "Adoptions this month"
            },
            {
                icon: "money green",
                value: "R$ 159.00",
                description: "Donated this month"
            }
        ]


        return (
            <div>


                <div className="ui text container">

                    <div className="ui grid">

                        <div className="sixteen wide column">
                            <h2 className="ui center aligned icon header">
                                <i className="circular paw icon"></i>
                                Welcome to Animapp
                            </h2>
                        </div>

                        <div className="sixteen wide column">
                            <div className="ui stackable three column grid">
                                {statistics.map(this.renderStatistics)}
                            </div>
                        </div>

                        <div className="sixteen wide column center aligned">

                            <p className="ui center aligned">We are here to help abandoned pets to find a new home.</p>
                        </div>

                    </div>

                </div>
            </div>
        )
    }


    renderStatistics(statistic){
        return(
            <div className="column">
                <div className="ui tiny statistic">
                    <div className="value">
                        <i className={`${statistic.icon} icon`}></i> {statistic.value}
                    </div>
                    <div className="label">
                        {statistic.description}
                    </div>
                </div>
            </div>
        )
    }
}