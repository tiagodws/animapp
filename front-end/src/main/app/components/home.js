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
                value: "R$ 1.590,00",
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

                        <div className="sixteen wide column center aligned">

                            <p className="ui center aligned">We are here to help abandoned pets to find a new home.</p>
                        </div>

                        <div className="sixteen wide column">
                            <div className="ui stackable three column grid">
                                {statistics.map(this.renderStatistics)}
                            </div>
                        </div>

                        <div className="sixteen wide colum">
                            <div className="ui basic segment">
                                <img src="./resources/img/stray-dog-1.png" className="ui small right floated image" />
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur iaculis dui tellus, rutrum consequat metus vulputate ac. Aliquam eleifend egestas enim, non faucibus ipsum. Vivamus turpis purus, ullamcorper at commodo eu, gravida fermentum eros. Donec suscipit ipsum id erat rhoncus, molestie laoreet ipsum suscipit. Donec ultrices metus volutpat sem pharetra posuere. Nulla sed commodo ipsum. Suspendisse purus augue, blandit ac magna non, ornare consequat lacus. Mauris tincidunt ante efficitur gravida interdum. Pellentesque pulvinar odio sit amet ultricies facilisis. Nunc placerat metus et ante cursus, a tincidunt nunc pulvinar. Aliquam pretium fringilla leo non elementum. Curabitur orci justo, bibendum in pellentesque non, malesuada egestas nunc.</p>
                            </div>
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