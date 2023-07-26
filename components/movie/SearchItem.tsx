import React from 'react';



const SearchItem = ({data}: {data?: any}) => {
    switch (data?.media_type) {
        case "person":
            return (
                <div>

                </div>
            )

        default:
            return (
                <div>

                </div>
            )
    }
};

export default SearchItem;