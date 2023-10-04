import './Kanban.scss';

function Kanban() {
  return (
    <div className="App">

      <h1 className="title">Kanban: Gestion de projet</h1>

      <div className="columns">
        <div data-testid="todo-column" className="column">
          <h2 className="column-title">TODO</h2>
          <div className="column-tasks">
              <div data-testid="task-6" className="task-yellow">
                <div className="task-content">
                    <div>Titre: My super feature 6</div>
                    <div>Description: Sed suscipit, ipsum in hendrerit porta, nisl est sagittis erat, at ultrices ex ipsum ac magna.</div>
                </div>
                <i data-testid="task-6-to-next" className="arrow right"> → </i>
              </div>
              <div data-testid="task-7" className="task-yellow">
                <div className="task-content">
                    <div>Titre: My super feature 7</div>
                    <div>Description: Vestibulum interdum elementum odio, sed vehicula tortor tempor ac. Quisque non dui pharetra, molestie neque feugiat, dapibus nunc.</div>
                </div>
                <i data-testid="task-7-to-next" className="arrow right"> → </i>
              </div>
              <div data-testid="task-8" className="task-red">
                <div className="task-content">
                    <div>Titre: My super feature 8</div>
                    <div>Description: Sed non semper nulla. Integer bibendum viverra massa. Sed vitae augue risus. Fusce elementum eleifend arcu, vel cursus mauris consequat vitae.</div>
                </div>
                <i data-testid="task-8-to-next" className="arrow right"> → </i>
              </div>
              <div data-testid="task-9" className="task-green">
                <div className="task-content">
                    <div>Titre: My super feature 9</div>
                    <div>Description: Nunc quis ante ut nibh venenatis suscipit. Integer molestie pulvinar dolor, nec vulputate sapien placerat tristique.</div>
                </div>
                <i data-testid="task-9-to-next" className="arrow right"> → </i>
              </div>
              <div data-testid="task-10" className="task-red">
                <div className="task-content">
                    <div>Titre: My super feature 10</div>
                    <div>Description: Maecenas non ante sed metus porttitor viverra sed sit amet neque. Quisque eros lacus, facilisis varius mauris porttitor, malesuada elementum lacus. Etiam sed volutpat sapien. Mauris rutrum magna quam, ac blandit sapien luctus sed.</div>
                </div>
                <i data-testid="task-10-to-next" className="arrow right"> → </i>
              </div>
          </div>
        </div>
        <div data-testid="doing-column" className="column">
          <h2 className="column-title">DOING</h2>
          <div className="column-tasks">
              <div data-testid="task-4" className="task-yellow">
                <i data-testid="task-4-to-previous" className="arrow left"> ← </i>
                <div className="task-content">
                    <div>Titre: My super feature 4</div>
                    <div>Description: Maecenas turpis felis, posuere a venenatis nec, sagittis vitae urna. Proin vel semper quam. Fusce sapien nibh, posuere finibus elementum at, scelerisque sed magna.</div>
                </div>
                <i data-testid="task-4-to-next" className="arrow right"> → </i>
              </div>
              <div data-testid="task-5" className="task-yellow">
                <i data-testid="task-5-to-previous" className="arrow left"> ← </i>
                <div className="task-content">
                    <div>Titre: My super feature 5</div>
                    <div>Description: Morbi viverra ante a vulputate aliquam. Suspendisse velit odio, ultricies id euismod a, tempus at mi.</div>
                </div>
                <i data-testid="task-5-to-next" className="arrow right"> → </i>
              </div>
          </div>
        </div>
        <div data-testid="done-column" className="column">
          <h2 className="column-title">DONE</h2>
          <div className="column-tasks">
              <div data-testid="task-1" className="task-blue">
                <i data-testid="task-1-to-previous" className="arrow left"> ← </i>
                <div className="task-content">
                    <div>Titre: My super feature 1</div>
                    <div>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. In blandit hendrerit odio, eget hendrerit arcu tempus vel</div>
                </div>
              </div>
              <div data-testid="task-2" className="task-blue">
                <i data-testid="task-2-to-previous" className="arrow left"> ← </i>
                <div className="task-content">
                    <div>Titre: My super feature 2</div>
                    <div>Description: Etiam et nulla ante. Ut pulvinar lorem lectus, eget condimentum velit aliquam in.</div>
                </div>
              </div>
              <div data-testid="task-3" className="task-green">
                <i data-testid="task-3-to-previous" className="arrow left"> ← </i>
                <div className="task-content">
                    <div>Titre: My super feature 3</div>
                    <div>Description: Quisque quis ornare nulla, vel scelerisque tellus. Maecenas velit metus, convallis vel neque fermentum, consequat iaculis est. Fusce quis nunc nisl. Aliquam nec interdum sem.</div>
                </div>
              </div>
          </div>
        </div>
     </div>
    </div>
  );
}

export default Kanban;
