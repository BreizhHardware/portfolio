import React from "react";

interface ProgressBarProps {
    bgcolor: string;
    completed: number;
}

const ProgressBar = (props: ProgressBarProps) => {
    const { bgcolor, completed } = props;

    const completedPercentage = completed + "%";

    const containerStyles = {
        height: 30,
        width: '100%',
        backgroundColor: "#cacdd2",
        borderRadius: 50,
        borderWidth: 2,
        marginTop: 5
    }

    const fillerStyles = {
        height: '100%',
        width: completedPercentage,
        backgroundColor: bgcolor,
        borderRadius: 'inherit',
        textAlign: 'right' as 'right',
        transition: 'width 1s ease-in-out',
    }

    const labelStyles = {
        padding: 5,
        color: 'white',
        fontWeight: 'bold'
    }

    return (
        <div style={containerStyles}>
            <div style={fillerStyles}>
                <span style={labelStyles}>{`${completed}%`}</span>
            </div>
        </div>
    );
};

export default ProgressBar;