import React from 'react'
import assets from '../../assets/assets';

const CommentTableItem = ({comment, fetchComments}) => {

    const {blog, createdAt, _id} = comment;
    const blogdate = new Date(createdAt);

  return (
    <tr className='order-y border-gray-300'>
        <td className='px-6 py-4'>
            <b className='font-medium text-gray-600'>blog</b> : {blog.title}
            <br />
            <br />
            <b className='font-medium text-gray-600'>Name</b> : {comment.name}
            <br />
            <b className='font-medium text-gray-600'>Comment</b> : {comment.content}
        </td>
        <td className='px-6 py-4 max-sm:hidden'>
            {blogdate.toLocaleDateString()}
        </td>
        <td className='px-6 py-4'>
            <div className='inline-flex gap-4 items-center'>
                {!comment.isApproved ? 
                    <img src={assets.tick_icon} className='w-5 hover:scale-110 transition-all cursor-pointer' alt="" /> 
                    : <p className='text-xs border border-green-600 bg-green-110 text-green-600 rounded-full px-3 py-1'>Approved</p>
                }
                <img src={assets.bin_icon} className='w-5 hover:scale:110 transition-all cursor-pointer' alt="" />
            </div>
        </td>
    </tr>
  )
}

export default CommentTableItem