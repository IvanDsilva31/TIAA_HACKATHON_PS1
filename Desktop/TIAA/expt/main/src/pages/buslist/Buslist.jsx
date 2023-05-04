import "./buslist.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar-busop/Navbar-busop"
import Busdatatable from "../../components/busdatatable/busdatatable"

const List = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Busdatatable/>
      </div>
    </div>
  )
}

export default List