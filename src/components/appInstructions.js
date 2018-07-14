import React from 'react';
import { Label } from 'office-ui-fabric-react/lib/Label';

const AppInstructions = function (props) {

    return (
        <div className="ms-Grid-row row app-instructions ms-font-m">
            <Label> This is a password generator app.
                The application relies on random generated blocks of text alongside the random input from the user.
                 Based on the selected blocks of text, password size and number of symbols a special unique and random password will be generated. </Label>
            <Label> Steps:</Label>
            <Label>1. Using the slider on the left adjust the password size (12 - 24 characters long).</Label>
            <Label>2. Using the slider on the right choose the maximum number of special charactes that the password should contain.</Label>
            <Label>3. Choose one random block of text from each randomly generated row.</Label>
            <Label>4. Follow the progress of the password generation in the blocks bellow.</Label>
        </div>)
}

export default AppInstructions;