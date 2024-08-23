import { useState } from "react";

export default function ExperienceArticle({
  company,
  jobTitle,
  date,
  logo,
  symbol,
  summary,
  description,
}) {
  const [toggleMore, setToggleMore] = useState(!summary);
  return (
    <div
      className={"d-flex experience" + (!!summary ? " experience-hover" : "")}
      onClick={(e) => {
        if (
          !!summary &&
          !e.target?.classList?.contains("zoomable") &&
          !e.target?.href &&
          !e.target?.id &&
          !e.target?.firstChild?.id
        ) {
          setToggleMore(!toggleMore);
        }
      }}
    >
      {logo && (
        <div>
          <span className="position-relative d-flex overflow-hidden m-auto experience-logo">
            <img
              className="ratio ratio-1x1 w-100 h-100 object-fit-contain"
              src={logo}
            />
          </span>
        </div>
      )}

      <div className="flex-grow-1 experience-article">
        <div className="d-flex flex-column">
          <div className="d-flex justify-content-between gap-x-2">
            <span>
              <p className="subtitle-lg d-inline-flex justify-content-center mb-0">
                {company}
              </p>
              {!!summary && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className={" view-more-icon" + (toggleMore ? " clicked" : "")}
                  style={{ marginTop: "-5px" }}
                >
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              )}
            </span>

            <span className="text-muted d-flex experience-right">
              {!!symbol ? (
                <span className="position-relative d-flex overflow-hidden experience-symbol">
                  <img
                    className="ratio ratio-1x1 w-100 h-100 object-fit-contain"
                    src={symbol}
                  />
                </span>
              ) : (
                <p className="m-0 text-p" style={{ textAlign: "right" }}>
                  {date}
                </p>
              )}
            </span>
          </div>
          <p className="subtitle-small">{jobTitle}</p>
        </div>
        <div className="text-height-sm">
          <span className="text-p">
            {!!summary && <p>{summary}</p>}

            <span>{toggleMore && description}</span>
          </span>
        </div>
        {!!summary && (
          <button
            className="btn btn-dark view-more-button"
            type="button"
            onClick={() => setToggleMore(!toggleMore)}
          >
            {toggleMore ? "Hide" : "More"}
          </button>
        )}
      </div>
    </div>
  );
}
