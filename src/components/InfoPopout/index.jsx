import React from "react"
import classNames from "classnames"
import { connect } from "react-redux"
import {
    setPopout
} from "../../actions/app.actions"
import "./style.css"


const InfoPopout = (props) => {
    const display = props.display
    const content = props.content
    console.log(props.content)
    const popoutclassName = classNames('info_poput__container ', {
        'hidden': !display
    });

    return (
        <div className={popoutclassName}>
            <div>
                <p>
                    {content}
                </p>
                <button className={'xml_form__submit'} data-testid="XML_form" onClick={(e) => {
                    e.preventDefault();
                    props.setPopout({ display: false, content: "" })
                }}>Close</button>
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    content: state.appReducer.popout.content,

    display: state.appReducer.popout.display,
})

const mapDispatchToProps = dispatch => {
    return {
        setPopout: (schema) => dispatch(setPopout(schema))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InfoPopout)


