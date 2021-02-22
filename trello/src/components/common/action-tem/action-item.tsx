import React, { ReactNode } from 'react';
import './action-item.scss';

interface IActionItemProps {
  icon?: ReactNode;
  label: string;
  className: string;
  onClick: () => void;
}

const ActionItem: React.FC<IActionItemProps> = ({
  icon,
  label,
  className,
  onClick,
}) => {
  return (
    <button
      type="button"
      className={`action-item ${className}`}
      onClick={onClick}
    >
      {icon && <span className="action-item-icon">{icon}</span>}
      <span className="action-item-label">{label}</span>
    </button>
  );
};

export default ActionItem;
