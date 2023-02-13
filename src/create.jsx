import React from "react";

const Create = () => {

    return(
        <ce id="cr" className="cr_form">
            <form >
                <div>
                <label for="name">User name</label>
                <input type="text" name="name" value=""/>
                </div>

                <div>
                <label for="detail">Detail</label>
                <input type="text" name="detail" value=""/>
                </div>

                <div>
                <label for="image">Choose photo</label>
                <input type="file" name="image" value=""/>
                </div>

                <div>
                <input type="submit" name="submit" value="Create"/>
                </div>
               


            </form>
        </ce>
    )
}
export default Create
