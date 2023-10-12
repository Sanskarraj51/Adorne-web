import React from 'react'

const AddressCard = ({item,openEdit,openDelete}) => {
  return (
    <li>
      <div className='address_title'>{item?.full_name}</div>
      <div className='address_detail'>
      {item?.address1}
        <br />
        {item?.address2}
        <br />
        {item?.city}, {item?.state} {item?.pin}
        <br />
        {item?.country}
        <br />
        Phone number:{item?.phone}
      </div>
      <div className='action-details'>
        <a role='button' onClick={()=>openEdit(item)} className='btn-edited' data-bs-toggle='modal' data-bs-target='#exampleModal'>
          Edit
        </a>
        <a role='button'  onClick={()=>openDelete(item)}  className='btn-danger' data-bs-toggle='modal' data-bs-target='#staticBackdrop1'>
          Delete
        </a>
      </div>
    </li>
  )
}

export default AddressCard
