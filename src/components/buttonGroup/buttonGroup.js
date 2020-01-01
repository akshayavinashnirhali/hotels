import './buttonGroup.scss';
import React from 'react';
import classnames from 'classnames';

class ButtonGroup extends React.Component {
    createButtons = () => {
        const { buttons, activeId } = this.props;
        return buttons.map((obj, index) => {
            const buttonClasses = classnames('button-group__button', {
                'button-group__button--active': obj.id === activeId
            });

            return (
                <button
                    key={index}
                    className={buttonClasses}
                    onClick={() => this.props.handleButtonClick(obj.id)}
                >{obj.label}
                </button>
            );
        });
    }

    render() {
        const buttons = this.createButtons();

        return (
            <div className="button-group">
                {buttons}
            </div>
        );
    }
}

ButtonGroup.defaultProps = {
    buttons: [],
    activeId: '',
    handleButtonClick: () => {}
}

export default ButtonGroup;
