import React from 'react';
import { useRouter } from 'next/router'
function Slug(props) {
    const router = useRouter()
    console.log(router.query.id)
    return (
        <div>
            Trang user id
        </div>
    );
}

export default Slug;