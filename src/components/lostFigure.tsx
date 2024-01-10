import React, {FC} from 'react';
import {Figure} from "../models/figure/Figure";

interface lostFigureProps{
    title: string
    figure: Figure[]
}

const LostFigure: FC<lostFigureProps> = ({title, figure}) => {
    return (
        <div className="lost">
            <h3>{title}</h3>
            {figure.map(figure =>
                <div key={figure.id}>
                    {figure.name} {figure.logo && <img height={30} width={20} src={figure.logo}/>}
                </div>
            )}
        </div>
    );
};

export default LostFigure;