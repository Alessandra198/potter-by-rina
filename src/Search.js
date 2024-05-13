import React from "react";

export default function Search() {
    return (
        <div className="Search">
            <form>
                <input type="search" placeholder="Ex. Weasley" />
                <input type="submit" value="Search" />
            </form>
        </div>
    );
}