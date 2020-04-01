import React, { useState } from "react"
import classNames from "classnames"
import useScreenType from 'react-hooks-screen-type';

import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";
import { setSchemaType } from '../../actions/XML_validator'
import "./style.css"



const MobileTabs = props => {

    const [displayMenu, setDisplayMenu] = useState(false);

    return (
        <div>
            <div className="nav__mobile"
                style={{ display: displayMenu ? 'block' : 'none' }}>
                {props.formTabs.map((tab, key) => {
                    let linkClassName = classNames('nav__link_element', { 'selected': tab === props.selected });
                    return (
                        <div key={key} className="nav__link">
                            <span className={linkClassName}
                                onClick={() => {
                                    if (props.history.location.pathname !== '/')
                                        props.history.push("/")
                                    props.setSchemaType(tab)
                                    setDisplayMenu(!displayMenu)
                                }}>
                                {tab}
                            </span>
                        </div>
                    )
                })}
            </div>
            <div className="nav__link"
                onClick={() => { setDisplayMenu(!displayMenu) }}>
                <span>
                    <i class="fa fa-bars"></i>
                </span>
            </div>

        </div>
    )
}

const DesktopTabs = props => {
    return (
        <>
            <div className="nav__left">
                <div className="nav__link">
                    Forms:
                </div>
                {props.formTabs.map((tab, key) => {
                    let linkClassName = classNames('nav__link_element', { 'selected': tab === props.selected });
                    return (
                        <div key={key} className="nav__link">
                            <span className={linkClassName}
                                onClick={() => {
                                    if (props.history.location.pathname !== '/')
                                        props.history.push("/")
                                    props.setSchemaType(tab)
                                }}>
                                {tab}
                            </span>
                        </div>
                    )
                })}
            </div>
            <div className="nav__link nav__right">
                <span className={'nav__link_element'}
                    onClick={() => props.history.push("/submit")}>
                    {'Upload XML'}
                </span>
            </div>
        </>
    )
}
const NavigationBar = props => {
    const history = useHistory();

    const formTabs = ["Study", "Sample", "Experiment", "Run", "Analysis", "DAC", "Policy", "Dataset"];
    const screenType = useScreenType();

    const isMobile = screenType === "xSmall";

    return (
        <nav className="nav">
            {isMobile ?
                <MobileTabs
                    selected={props.selected}
                    history={history}
                    setSchemaType={props.setSchemaType}
                    formTabs={formTabs} /> :
                <DesktopTabs
                    selected={props.selected}
                    history={history}
                    setSchemaType={props.setSchemaType}
                    formTabs={formTabs} />}
        </nav>
    )
}

const mapStateToProps = (state, ownProps) => ({
    selected: state.xml_form.schema_type,
})

const mapDispatchToProps = dispatch => {
    return {
        setSchemaType: (schema) => dispatch(setSchemaType(schema))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar)

