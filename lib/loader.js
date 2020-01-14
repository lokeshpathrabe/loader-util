import React from "react";
import PropTypes from "prop-types";

import "./loader.scss";
import { gatherClasses } from "./utils";
import Spinner from "reactstrap/lib/Spinner";
import { useLoaderState } from "./loaderState";

const Loader = props => {
    const isLoading = useLoaderState(props.id);
    return (
        <div
            className={gatherClasses(
                props,
                isLoading ? "loader show" : "loader",
                props.invert ? "loader-invert" : null,
                props.fullPage ? "full-page" : null
            )}>
            <div
                className={gatherClasses(
                    null,
                    "loader-content",
                    props.noOverlay ? "no-overlay" : null
                )}>
                {props.showIcon ? (
                    <Spinner className="loader-icon" color={props.invert ? "light" : "dark"} />
                ) : null}
                {props.text ? <div className="loader-text">{props.text}</div> : null}
            </div>
            {props.children}
        </div>
    );
};

Loader.propTypes = {
    showIcon: PropTypes.bool,
    text: PropTypes.string,
    fullPage: PropTypes.bool,
    invert: PropTypes.bool,
    noOverlay: PropTypes.bool
};

Loader.defaultProps = {
    showIcon: true,
    text: null,
    fullPage: false,
    invert: false,
    noOverlay: false
};

Loader.displayName = "Loader";

export default Loader;
