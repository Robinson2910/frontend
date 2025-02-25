    const selectedTab = useSelector((state) => state.counter.prescriptionType);
  const patientId = useSelector((state) => state.counter.patientid);
  const [show, setshow] = useState(false);
  const Content = useRef();
  const [valueChange, setvalueChange] = useState({
    dualMarker: "Given",
    row1: "1-0-0",
    row2: "1-0-0",
    row3: "1-0-0",
    row6: "1-0-0",
    drop1: "T.TRITOFER XT",
    drop2: "T.INTAFOL D",
    drop3:"T.CALOZEM PLUS",
    drop4:"MAXVIDA"

  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // visit: "",
  //   lmp: "",
  //   edd: "",
  //   pog: "",
  //   ntScan: "",
  //   db: "",
  //   dualMarker: "Given",
  //   complaints: "",
  //   oe: "",
  //   pedal: "",
  //   pr: "",
  //   BP: "",
  //   Wt: "",
  //   ppw: "",
  //   date: "",
  //   hb: "",
  //   pvc: "",
  //   db: "",
  //   db: "",
  //   db: "",
  //   db: "",

  const handleChange = (e) => {
    setvalueChange({ ...valueChange, [e.target.name]: e.target.value });
  };
  console.log(valueChange, "value");
  const handletest = () => {
    setshow(true);
    setTimeout(() => {
      const CreateThunk = async () => {
        let htmlPayload;
        htmlPayload = document.getElementById("trimester").innerHTML;
        console.log(htmlPayload, "liki");
        const payload = {
          patient_id: patientId,
          template_type: selectedTab,
          prescription_template: htmlPayload,
        };
        props.loaderchange(true);
        const patentDetails = postPrescriptionTemplate(payload);
        const response = await dispatch(patentDetails);
        if (response?.payload?.status?.code === 200) {
          props.loaderchange(false);
          navigate("/PatientView");
          // Swal.fire({
          //   title: "Successful.",
          //   text: "Record added successful.",
          //   icon: "success",
          //   showConfirmButton: false,
          //   timer: 1500,
          // });
        } else {
          props.loaderchange("false");
          props.popupalert("true");
          props.popuptext("Network went wrong, Please try after some time.");
          // props.popuptext(response?.status?.message);
          setTimeout(() => {
            props.popupalert("false");
          }, 2000);
        }
      };
      CreateThunk();
    }, 2000);
  };
    
    <>
      <div
        className=""
        ref={Content}
        style={{ padding: "40px" }}
        id="trimester"
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "cen",
          }}
        >
          {/* <h1 style={{    marginBottom: '35px',fontWeight: 600}}>FIRST TRIMESTER</h1> */}
          <h3 style={{}}>VISIT REMARKS:</h3>
          <textarea
            className={`createTime ${show ? "hide" : "show"}`}
            onChange={(e) => handleChange(e)}
            name="visit"
            style={{
              width: "600px",
              height: "100px",
              border: "1px solid #ddd",
              outline: "none",
              padding: "10px",
            }}
          ></textarea>
          <span
            className={`Textarea ${!show ? "hide" : "show"}`}
            style={{ width: "550px", height: "auto", wordWrap: "break-word" }}
          >
            &nbsp;{valueChange.visit}
          </span>
        </div>
        <div style={{ marginTop: "20px" }}>
          <span style={{ fontWeight: "600" }}>LMP:</span>
          <input
            className={`createTime ${show ? "hide" : "show"}`}
            onChange={(e) => handleChange(e)}
            name="lmp"
            style={{
              border: "1px solid #ddd",
              width: "180px",
              marginLeft: "10px",
              padding: "10px",
              outline: "none",
            }}
          ></input>
          <span className={`input ${!show ? "hide" : "show"}`}>
            &nbsp;{valueChange.lmp}
          </span>

          <span style={{ fontWeight: "600", marginLeft: "10px" }}>EDD:</span>
          <input
            className={`createTime ${show ? "hide" : "show"}`}
            onChange={(e) => handleChange(e)}
            name="edd"
            style={{
              border: "1px solid #ddd",
              width: "180px",
              marginLeft: "10px",
              padding: "10px",
              outline: "none",
            }}
          ></input>
          <span className={`input ${!show ? "hide" : "show"}`}>
            &nbsp;{valueChange.edd}
          </span>
          <span style={{ fontWeight: "600", marginLeft: "10px" }}>POG:</span>
          <input
            className={`createTime ${show ? "hide" : "show"}`}
            onChange={(e) => handleChange(e)}
            name="pog"
            style={{
              border: "1px solid #ddd",
              width: "180px",
              marginLeft: "10px",
              padding: "10px",
              outline: "none",
            }}
            // // placeholder="POG.."
          ></input>
          <span className={`input ${!show ? "hide" : "show"}`}>
            &nbsp;{valueChange.pog}
          </span>
        </div>
        <div style={{ marginTop: "20px" }}>
          <span style={{ fontWeight: "600" }}>NT SCAN:</span>
          <input
            className={`createTime ${show ? "hide" : "show"}`}
            onChange={(e) => handleChange(e)}
            name="ntScan"
            style={{
              border: "1px solid #ddd",
              width: "180px",
              marginLeft: "10px",
              padding: "10px",
              outline: "none",
            }}
            // // placeholder="NT SCAN.."
          ></input>
          <span className={`input ${!show ? "hide" : "show"}`}>
            &nbsp;{valueChange.ntScan}
          </span>

          <span style={{ fontWeight: "600", marginLeft: "10px" }}>D/B:</span>
          <input
            className={`createTime ${show ? "hide" : "show"}`}
            onChange={(e) => handleChange(e)}
            name="db"
            style={{
              border: "1px solid #ddd",
              width: "180px",
              marginLeft: "10px",
              padding: "10px",
              outline: "none",
            }}
            // // placeholder="D/B.."
          ></input>
          <span className={`input ${!show ? "hide" : "show"}`}>
            &nbsp;{valueChange.db}
          </span>

          <span style={{ fontWeight: "600", marginLeft: "10px" }}>
            DUAL MARKER:
          </span>
          <select
            className={`createTime ${show ? "hide" : "show"}`}
            onChange={(e) => handleChange(e)}
            name="dualMarker"
            style={{
              border: "1px solid #ddd",
              width: "180px",
              marginLeft: "10px",
              padding: "10px",
              outline: "none",
              backgroundColor: "#fff",
            }}
            // // placeholder="POG.."
          >
            <option value={"Given"}>Given</option>
            <option value={"Not Given"}>Not Given</option>
          </select>
          <span className={`input ${!show ? "hide" : "show"}`}>
            &nbsp;{valueChange.dualMarker}
          </span>
        </div>
        <div
          style={{
            marginTop: "20px",
            marginTop: "30px",
            isplay: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              //   flexDirection: "column",
            }}
          >
            <h3>COMPLAINTS:</h3>
            <textarea
              className={`createTime ${show ? "hide" : "show"}`}
              onChange={(e) => handleChange(e)}
              name="complaints"
              style={{
                width: "600px",
                height: "100px",
                border: "1px solid #ddd",
                outline: "none",
                padding: "10px",
              }}
            ></textarea>
            <span
              className={`Textarea ${!show ? "hide" : "show"}`}
              style={{ width: "550px", height: "auto", wordWrap: "break-word" }}
            >
              &nbsp;{valueChange.complaints}
            </span>
            {/* <span
              style={{
                width: "550px",
                height: "auto",
                wordWrap: "break-word",
                marginLeft: "50px",
              }}
            >
              &nbsp;{valueChange.complaints}
            </span> */}
          </div>
        </div>
        <div style={{ marginTop: "20px" }}>
          <span style={{ fontWeight: "600" }}>O/E:</span>
          <input
            className={`createTime ${show ? "hide" : "show"}`}
            onChange={(e) => handleChange(e)}
            name="oe"
            style={{
              border: "1px solid #ddd",
              width: "180px",
              marginLeft: "10px",
              padding: "10px",
              outline: "none",
            }}
            // // placeholder="O/E.."
          ></input>
          <span className={`input ${!show ? "hide" : "show"}`}>
            &nbsp;{valueChange.oe}
          </span>
          <span style={{ fontWeight: "600", marginLeft: "10px" }}>
            PEDAL EDEMA:
          </span>
          <input
            className={`createTime ${show ? "hide" : "show"}`}
            onChange={(e) => handleChange(e)}
            name="pedal"
            style={{
              border: "1px solid #ddd",
              width: "180px",
              marginLeft: "10px",
              padding: "10px",
              outline: "none",
            }}
            // // placeholder="PEDAL EDEMA.."
          ></input>
          <span className={`input ${!show ? "hide" : "show"}`}>
            &nbsp;{valueChange.pedal}
          </span>
        </div>
        <div style={{ marginTop: "20px" }}>
          <span style={{ fontWeight: "600" }}>PR:</span>
          <input
            className={`createTime ${show ? "hide" : "show"}`}
            onChange={(e) => handleChange(e)}
            name="pr"
            style={{
              border: "1px solid #ddd",
              width: "100px",
              marginLeft: "10px",
              padding: "10px",
              outline: "none",
            }}
            // // placeholder="PR.."
          ></input>
          <span className={`input ${!show ? "hide" : "show"}`}>
            &nbsp;{valueChange.pr}
          </span>

          <span>/min</span>
          <span style={{ fontWeight: "600", marginLeft: "10px" }}>BP:</span>
          <input
            className={`createTime ${show ? "hide" : "show"}`}
            onChange={(e) => handleChange(e)}
            name="BP"
            style={{
              border: "1px solid #ddd",
              width: "100px",
              marginLeft: "10px",
              padding: "10px",
              outline: "none",
            }}
            // // placeholder="BP.."
          ></input>
          <span className={`input ${!show ? "hide" : "show"}`}>
            &nbsp;{valueChange.BP}
          </span>

          <span>/mmHg</span>
          <span style={{ fontWeight: "600", marginLeft: "10px" }}>Wt:</span>
          <input
            className={`createTime ${show ? "hide" : "show"}`}
            onChange={(e) => handleChange(e)}
            name="Wt"
            style={{
              border: "1px solid #ddd",
              width: "100px",
              marginLeft: "10px",
              padding: "10px",
              outline: "none",
            }}
            // // placeholder="mmHg.."
          ></input>
          <span className={`input ${!show ? "hide" : "show"}`}>
            &nbsp;{valueChange.Wt}
          </span>
          <span>/kg</span>
          <>
            <span style={{ fontWeight: "600", marginLeft: "10px" }}>
              Pre Preg Wt:
            </span>
            <input
              className={`createTime ${show ? "hide" : "show"}`}
              onChange={(e) => handleChange(e)}
              name="ppw"
              style={{
                border: "1px solid #ddd",
                width: "100px




                code:


                