import React from "react";
import {Link} from "react-router-dom";
import {Menu} from "semantic-ui-react";

export default function Header() {
  return (
      <div>
          <header className="ui centered">
              <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
          </header>
          <Menu>
              <Link to={'/'}>
                  <Menu.Item name={'home'}/>
              </Link>
              <Link to={'/characters'}>
                  <Menu.Item name={'characters'}/>
              </Link>
              <Link to={'/search'}>
                  <Menu.Item name={'search'}/>
              </Link>
          </Menu>
      </div>
  );
}
