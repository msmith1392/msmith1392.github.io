import React from 'react';

type CardProps = {
  title?: React.ReactNode;
  expandable?: boolean;
  expanded?: boolean;
  onToggle?: () => void;
  children: React.ReactNode;
  className?: string;
  showBottomToggle?: boolean;
};

const Card: React.FC<CardProps> = ({
  title,
  expandable = false,
  expanded = true,
  onToggle,
  children,
  className = '',
  showBottomToggle = false,
}) => (
  <div className={`card ${className}`} style={{ cursor: expandable ? 'pointer' : 'default' }}>
    <div className="card-body">
      {title && (
        <div className="card-header-flex">
          <h4 className="card-title-no-margin">{title}</h4>
          {expandable && (
            <span
              className="card-text-muted card-toggle"
              onClick={onToggle}
              tabIndex={0}
              role="button"
              aria-expanded={expanded}
              onKeyDown={e => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onToggle && onToggle();
                }
              }}
            >
              {expanded ? (
                <>
                  Collapse <span aria-hidden>▲</span>
                </>
              ) : (
                <>
                  Expand <span aria-hidden>▼</span>
                </>
              )}
            </span>
          )}
        </div>
      )}
      {(!expandable || expanded) && (
        <>
          {children}
          {/* Bottom toggle */}
          {expandable && expanded && showBottomToggle && (
            <div
              className="card-text-muted card-bottom-toggle"
              onClick={onToggle}
              tabIndex={0}
              role="button"
              aria-expanded={expanded}
              onKeyDown={e => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onToggle && onToggle();
                }
              }}
            >
              Collapse <span aria-hidden>▲</span>
            </div>
          )}
        </>
      )}
    </div>
  </div>
);

export default Card;
