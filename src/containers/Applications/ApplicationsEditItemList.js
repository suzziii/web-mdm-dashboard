import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class ApplicationsEditItemList extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            input: ''
        }
    }

    componentDidMount() {
        this.setState({
            input: this.props.selectedItem["PluginFlyvemdmPackage.alias"]
        })
    }

    changeInput = (e) => {
        this.setState({ input: e.target.value })
    }

    blurInput = (e) => {
        if (e.target.value.trim() !== "") {
            this.props.updateItemList(this.props.selectedItem["PluginFlyvemdmPackage.id"], e.target.value)
        }
    }

    render() {
        return (

            <div className='files-list' >
                <div className='files-list-content'>
                    <div className='files-list-item'>
                        <div className='item-content-primary'>
                            <input
                                type="text"
                                style={{ width: '240px' }}
                                className="win-textbox"
                                placeholder="Fleet name"
                                name="input"
                                value={this.state.input}
                                onChange={this.changeInput}
                                onBlur={this.blurInput}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
ApplicationsEditItemList.propTypes = {
    selectedItem: PropTypes.object.isRequired,
    changeAction: PropTypes.func.isRequired,
    showNotification: PropTypes.func.isRequired
}