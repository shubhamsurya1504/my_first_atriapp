import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex as Flex1 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Div as Div1 } from "@atrilabs/react-component-manifests/src/manifests/Div/Div.tsx";
import { TextBox as TextBox1 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Button as Button1 } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { Link as Link1 } from "@atrilabs/react-component-manifests/src/manifests/Link/Link.tsx";
import { useFlex4Cb, useFlex11Cb, useDiv12Cb, useTextBox5Cb, useTextBox6Cb, useButton2Cb, useTextBox21Cb, useLink18Cb, useLink19Cb, useLink20Cb } from "../page-cbs/aboutus";
import "../page-css/aboutus.css";
import "../custom/aboutus";

export default function Aboutus() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = subscribeInternalNavigation((url) => {
      navigate(url);
    });
    return unsub;
  }, [navigate]);

  const location = useLocation();
  useLayoutEffect(()=>{
    fetchPageProps(location.pathname, location.search).then((res)=>{
      updateStoreStateFromController(res.pageName, res.pageState)
    })
  }, [location])

  const Flex4Props = useStore((state)=>state["aboutus"]["Flex4"]);
const Flex4IoProps = useIoStore((state)=>state["aboutus"]["Flex4"]);
const Flex4Cb = useFlex4Cb()
const Flex11Props = useStore((state)=>state["aboutus"]["Flex11"]);
const Flex11IoProps = useIoStore((state)=>state["aboutus"]["Flex11"]);
const Flex11Cb = useFlex11Cb()
const Div12Props = useStore((state)=>state["aboutus"]["Div12"]);
const Div12IoProps = useIoStore((state)=>state["aboutus"]["Div12"]);
const Div12Cb = useDiv12Cb()
const TextBox5Props = useStore((state)=>state["aboutus"]["TextBox5"]);
const TextBox5IoProps = useIoStore((state)=>state["aboutus"]["TextBox5"]);
const TextBox5Cb = useTextBox5Cb()
const TextBox6Props = useStore((state)=>state["aboutus"]["TextBox6"]);
const TextBox6IoProps = useIoStore((state)=>state["aboutus"]["TextBox6"]);
const TextBox6Cb = useTextBox6Cb()
const Button2Props = useStore((state)=>state["aboutus"]["Button2"]);
const Button2IoProps = useIoStore((state)=>state["aboutus"]["Button2"]);
const Button2Cb = useButton2Cb()
const TextBox21Props = useStore((state)=>state["aboutus"]["TextBox21"]);
const TextBox21IoProps = useIoStore((state)=>state["aboutus"]["TextBox21"]);
const TextBox21Cb = useTextBox21Cb()
const Link18Props = useStore((state)=>state["aboutus"]["Link18"]);
const Link18IoProps = useIoStore((state)=>state["aboutus"]["Link18"]);
const Link18Cb = useLink18Cb()
const Link19Props = useStore((state)=>state["aboutus"]["Link19"]);
const Link19IoProps = useIoStore((state)=>state["aboutus"]["Link19"]);
const Link19Cb = useLink19Cb()
const Link20Props = useStore((state)=>state["aboutus"]["Link20"]);
const Link20IoProps = useIoStore((state)=>state["aboutus"]["Link20"]);
const Link20Cb = useLink20Cb()

  return (<>
  <Flex1 className="p-aboutus Flex11 bpt" {...Flex11Props} {...Flex11Cb} {...Flex11IoProps}>
<TextBox1 className="p-aboutus TextBox21 bpt" {...TextBox21Props} {...TextBox21Cb} {...TextBox21IoProps}/>
<Div1 className="p-aboutus Div12 bpt" {...Div12Props} {...Div12Cb} {...Div12IoProps}>
<Link1 className="p-aboutus Link18 bpt" {...Link18Props} {...Link18Cb} {...Link18IoProps}/>
<Link1 className="p-aboutus Link19 bpt" {...Link19Props} {...Link19Cb} {...Link19IoProps}/>
<Link1 className="p-aboutus Link20 bpt" {...Link20Props} {...Link20Cb} {...Link20IoProps}/>
</Div1>
</Flex1>
<Flex1 className="p-aboutus Flex4 bpt" {...Flex4Props} {...Flex4Cb} {...Flex4IoProps}>
<TextBox1 className="p-aboutus TextBox6 bpt" {...TextBox6Props} {...TextBox6Cb} {...TextBox6IoProps}/>
<TextBox1 className="p-aboutus TextBox5 bpt" {...TextBox5Props} {...TextBox5Cb} {...TextBox5IoProps}/>
<Button1 className="p-aboutus Button2 bpt" {...Button2Props} {...Button2Cb} {...Button2IoProps}/>
</Flex1>
  </>);
}
