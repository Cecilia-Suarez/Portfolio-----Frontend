import React from 'react'

const DetailsTable = ({project}) => {
    
    return (
        <div>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>Description</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>Year</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>Skills</th>
                    </tr>
                </thead>
                <tbody>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>{project.description}</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>{project.year}</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>{project.skills.map(skill => skill.name).join(', ')}</td>
                </tbody>
            </table>
        </div>
    )
}

export default DetailsTable