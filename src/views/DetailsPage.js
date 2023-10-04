import { useParams } from "react-router-dom";

import './DetailsPage.scss';

const task = {
  id: 1,
  title: 'my super feature',
  status: 'DOING',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce suscipit.'
}

function DetailsPage(){
  const { id } = useParams();

  return (
    <div>
      <h1 className="title">Kanban: Gestion de projet</h1>
      <div className="task-details">
        <div>
          <div className="task-details-section-title">Details: </div>
          <div className="task-details-section-content">
            <div data-testid="task-id">
              <span className="task-details-section-content-title">task: </span>
              <span>{id}</span>
            </div>
            <div data-testid="task-title">
              <span className="task-details-section-content-title">Feature: </span>
              <span>{task.title}</span>
            </div>
            <div data-testid="task-status">
              <span className="task-details-section-content-title">Status: </span>
              <span>{task.status}</span>
            </div>
          </div>
        </div>
        <div data-testid="task-description">
          <div className="task-details-section-title">Description: </div>
          <div>{task.description}</div>
        </div>
      </div>
    </div>

  )
}

export default DetailsPage;
