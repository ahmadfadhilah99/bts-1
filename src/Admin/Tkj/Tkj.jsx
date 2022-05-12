import React, { Component } from 'react'
import {
  Button,
  Row,
  Col,
} from "react-bootstrap";
import "./Tkj.css";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import { Link} from "react-router-dom";
import { FaEdit } from "react-icons/fa";



class Tkj extends Component {
  state = {
    users:[
      {
        kelas: "XII TEKNIK KOMPUTER JARINGAN 1",
        foto: "45",
        diperbarui: "diperbarui",
        fotokelas:"button",
        fotosiswa: "button",
        list: "tkj1"
      },
      {
        kelas: "XII TEKNIK KOMPUTER JARINGAN 2",
        foto: "45",
        diperbarui: "diperbarui",
        fotokelas:"button",
        fotosiswa: "button",
        list: "tkj2"
      },
      {
        kelas: "XII TEKNIK KOMPUTER JARINGAN 3",
        foto: "45",
        diperbarui: "diperbarui",
        fotokelas:"button",
        fotosiswa: "button",
        list: "tkj3"
      }
    ]
  }
  render() {
    const columns = [
      {
        dataField: "kelas",
        text: "Kelas",
        headerStyle:{
          width:'300px'
        },
        // make delete and update button
        // formatter: (cellContent, row) => {
        //   return (
        //     <div>
        //       <Link to={`/admin/ak/list-${row.list}`} style={{textDecoration:'none', color:'black'}}>
        //       {row.kelas}
        //       </Link>
        //     </div>
        //   );
        // }

      },
      {
        dataField: "foto",
        text: "Foto Terupload",
        headerStyle:{
          width: '180px'
        }
      },
      {
        dataField: "diperbarui",
        text: "Diperbarui",
        headerStyle:{
          width: '150px'
        }
      },
      {
        text: "Foto Kelas",
        align: "center",
        headerStyle: {
          width: "180px",
          textAlign: "center",
        },
        // make delete and update button
        formatter: (cellContent, row) => {
          return (
            <div>
              {/* <Sidebar /> */}
              <Row>
                <Col md={12}>
                  <Link to={`/admin/tkj/foto-kelas-${row.list}`}>
                    <Button variant="primary" className="mr-2" block>
                      {" "}
                      <FaEdit />
                    </Button>
                  </Link>
                </Col>
              </Row>
            </div>
          );
        },
        
      },
      {
        text: "Foto Siswa",
        align: "center",
        headerStyle: {
          width: "180px",
          textAlign: "center",
        },
        // make delete and update button
        formatter: (cellContent, row) => {
          return (
            <div>
              {/* <Sidebar /> */}
              <Row>
                <Col md={12}>
                  <Link to={`/admin/tkj/foto-siswa-${row.list}`}>
                    <Button variant="primary" className="mr-2" block>
                      {" "}
                      <FaEdit />
                    </Button>
                  </Link>
                </Col>
              </Row>
            </div>
          );
        },
      }
    ];
    return (
      <div>
        <div className="container" style={{boxShadow:'5px 5px 10px #D3D3D3',padding:'60px'}}>
          <div id="row">
            <h3> Pilih Kelas </h3>
          </div>
          
          <BootstrapTable keyField='id' data={ this.state.users } columns={ columns } bordered={false}/>
      
        </div>        
      </div>
    );
  }
}

export default Tkj;
