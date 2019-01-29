import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { remove } from './actions'

const List = props => {

    const renderRows = () => {
        const list = props.list || []
        return list.map(hotspot => (
            <tr key={hotspot._id}>
                <td className="listHotspot">{hotspot.hotspot}</td>
                <td>
                    <a className="remove" onClick={() => props.remove(hotspot)}>Delete</a>    
                </td>
            </tr>
        ))
    }

    return (
        <table className='"thead-dark"'>
            <thead>
                <tr>
                    <th>List of Hotspots</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}

const mapStateToProps = state => ({ list: state.hotspot.list })
const mapDispatchToProps = dispatch =>
    bindActionCreators({ remove }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(List)