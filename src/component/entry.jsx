import React, { Component } from 'react';
import './entry.css';

class Entry extends Component {
    render() {
        return (
            <div>
                <div className="Entry">
                    <p>
                        This is some temp text for the Entry component.
                    </p>
                </div>
                <form>
                    {/* Can be built from a DB or set list...can probably just do from a data text file in the meantime */}
                    <label>
                        Company:
                        <input
                            name="company"
                            type="text"
                        />
                    </label>
                    <br />
                    {/* Can be built from a DB or set list...can probably just do from a data text file in the meantime */}
                    <label>
                        Beer Name:
                        <input
                            name="beerName"
                            type="text"
                        />
                    </label>
                    <br />
                    {/* Can be built from a DB or set list...can probably just do from a data text file in the meantime */}
                    <label>
                        Beer Style:
                        <select name="beerStyle">
                            <option value="IPA">IPA</option>
                            <option value="Stout">Stout</option>
                        </select>
                    </label>
                    <br />
                    {/* Just a date...nothing special */}
                    <label>
                        Drink Date:
                        <input
                            name="drinkDate"
                            type="date"
                        />
                    </label>
                    <br />
                    {/* Just a toggle of Y/N */}
                    <label>
                        Drink Again:
                         <input type="radio" name="drinkAgain" value="yes" checked />Yes
                         <input type="radio" name="drinkAgain" value="no" />No
                    </label>
                    <br />
                    {/* Need to make this a better looking entry. Not sure if able to make the rows/cols % screen wise or how to make it flow better */}
                    <label>
                        Notes:
                         <textarea name="notes" rows="4" cols="50">
                         Notes go here
                         </textarea>
                    </label>
                    <br />
                </form>
            </div>
        );
    }
}

export default Entry;
