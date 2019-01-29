import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { add, changeDescription, search } from './actions'

class Form extends Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        this.props.search()
    }

    contador(count) {
        return ++count
    }

    render() {
        const { add } = this.props
        return (
            <div role='form' className='form'>
                <button type="button" className="btn btn-primary btn-lg" id='add'
                    onClick={() => add(`Hotspot#${this.contador()}`)}>Cadastrar hotspot</button>
            </div>
        )
    }
}

const mapStateToProps = state => ({ hotspot: state.hotspot })
const mapDispatchToProps = dispatch =>
    bindActionCreators({ add, changeDescription, search }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Form)