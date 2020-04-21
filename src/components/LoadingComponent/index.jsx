import React from "react"
import classnames from "classnames"
import { connect } from "react-redux"
import "./style.css"

const LoadingComponent = props => {

    const spinnerClassname = classnames('spinner__container ', {
        'hidden': !props.isLoading
    });
    return (
        <div className={spinnerClassname}>
            <div className="spinner" />
        </div>
    )
}


const mapStateToProps = (state, ownProps) => ({
    isLoading: state.appReducer.loading,
})

export default connect(mapStateToProps, null)(LoadingComponent)