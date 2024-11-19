import React from 'react'
import '../Styles/DetailsTable.css'

const DetailsTable = ({project}) => {
    
    return (
        <div className="flex justify-center">
            <table className="w-2/4">
            <tbody>
                    <tr >
                        <th className='th-style'>Description</th>
                        <td className='td-style'>{project.description}</td>
                    </tr>
                    <tr>
                        <th className='th-style'>Year</th>
                        <td className='td-style'>{project.year}</td>
                    </tr>
                    <tr>
                        <th className='th-style'>Skills</th>
                        <td className='td-style'>{project.skills.map(skill => skill.name).join(', ')}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default DetailsTable