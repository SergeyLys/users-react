import React from 'react'

const UserImageForm = ({onSubmit}) => (
    <form>
        <input onChange={e => onSubmit(e.target.files[0])} type="file" name='input-image'/>
    </form>
);

export default UserImageForm;