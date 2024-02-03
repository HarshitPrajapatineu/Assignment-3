// import { NavBar } from "./components/NavBar";

const NavBar = () => {
    return (
        <div className="navbar">
            <div className="logo">LOGO</div>
            <div className="profile">Profile</div>
        </div>
    )
}


const SidePanel = (props) => {
    const sidePanelList = [
    "Home",
    "Search",
    "Extras",
    "Pathway",
    "Explore",
    "Settings"];
    return (
        <div className="sidepanel">
            {
                sidePanelList.map(item => <div className="listcard">{item}<hr></hr></div>)
            }
            {props.children}
        </div>
    )
}

const ChartPanel = () => {
    return (
        <div className="chartpanel">
            <img src="./assets/chart.png" alt="" />
        </div>
    )
}

const TablePanel = () => {
    return (
        <div className="tablepanel">
            <img src="./assets/table.png" alt="" />
        </div>
    )
}

const DetailCard = () => {
    return(
        <div className="detailcard">
            <h3> Block</h3>
            <hr />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates minus facere mollitia facilis nostrum laborum minima officiis 
            tenetur suscipit praesentium? Officiis cumque optio eaque porro facilis quaerat natus iste libero.</p>
        </div>
    )
}

const MainPanel = (props) => {
    return (
        <div className="mainpanel">
            {props.children}
        </div>
    )
}

const App = () => {

    return (
        <React.Fragment>
            <NavBar />
            <MainPanel >
                <SidePanel> 
                    <DetailCard/>
                </SidePanel>
                <div className="rightpanel">
                    <ChartPanel />
                    <TablePanel />
                </div>
            </MainPanel>
        </React.Fragment>

    )
}