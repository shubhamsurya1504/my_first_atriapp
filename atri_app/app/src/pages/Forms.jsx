import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex as Flex2 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Div as Div2 } from "@atrilabs/react-component-manifests/src/manifests/Div/Div.tsx";
import { TextBox as TextBox2 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Input } from "@atrilabs/react-component-manifests/src/manifests/Input/Input.tsx";
import { Link as Link2 } from "@atrilabs/react-component-manifests/src/manifests/Link/Link.tsx";
import { Checkbox } from "@atrilabs/react-component-manifests/src/manifests/Checkbox/Checkbox.tsx";
import { Button as Button2 } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { useFlex5Cb, useDiv4Cb, useFlex12Cb, useDiv13Cb, useDiv5Cb, useDiv6Cb, useDiv7Cb, useDiv15Cb, useDiv16Cb, useTextBox7Cb, useTextBox8Cb, useInput1Cb, useTextBox22Cb, useLink21Cb, useLink22Cb, useLink23Cb, useInput2Cb, useTextBox9Cb, useInput3Cb, useTextBox10Cb, useTextBox12Cb, useTextBox13Cb, useTextBox14Cb, useCheckbox3Cb, useCheckbox4Cb, useTextBox24Cb, useInput4Cb, useButton4Cb, useButton5Cb, useButton6Cb } from "../page-cbs/forms";
import "../page-css/forms.css";
import "../custom/forms";

export default function Forms() {
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

  const Flex5Props = useStore((state)=>state["forms"]["Flex5"]);
const Flex5IoProps = useIoStore((state)=>state["forms"]["Flex5"]);
const Flex5Cb = useFlex5Cb()
const Div4Props = useStore((state)=>state["forms"]["Div4"]);
const Div4IoProps = useIoStore((state)=>state["forms"]["Div4"]);
const Div4Cb = useDiv4Cb()
const Flex12Props = useStore((state)=>state["forms"]["Flex12"]);
const Flex12IoProps = useIoStore((state)=>state["forms"]["Flex12"]);
const Flex12Cb = useFlex12Cb()
const Div13Props = useStore((state)=>state["forms"]["Div13"]);
const Div13IoProps = useIoStore((state)=>state["forms"]["Div13"]);
const Div13Cb = useDiv13Cb()
const Div5Props = useStore((state)=>state["forms"]["Div5"]);
const Div5IoProps = useIoStore((state)=>state["forms"]["Div5"]);
const Div5Cb = useDiv5Cb()
const Div6Props = useStore((state)=>state["forms"]["Div6"]);
const Div6IoProps = useIoStore((state)=>state["forms"]["Div6"]);
const Div6Cb = useDiv6Cb()
const Div7Props = useStore((state)=>state["forms"]["Div7"]);
const Div7IoProps = useIoStore((state)=>state["forms"]["Div7"]);
const Div7Cb = useDiv7Cb()
const Div15Props = useStore((state)=>state["forms"]["Div15"]);
const Div15IoProps = useIoStore((state)=>state["forms"]["Div15"]);
const Div15Cb = useDiv15Cb()
const Div16Props = useStore((state)=>state["forms"]["Div16"]);
const Div16IoProps = useIoStore((state)=>state["forms"]["Div16"]);
const Div16Cb = useDiv16Cb()
const TextBox7Props = useStore((state)=>state["forms"]["TextBox7"]);
const TextBox7IoProps = useIoStore((state)=>state["forms"]["TextBox7"]);
const TextBox7Cb = useTextBox7Cb()
const TextBox8Props = useStore((state)=>state["forms"]["TextBox8"]);
const TextBox8IoProps = useIoStore((state)=>state["forms"]["TextBox8"]);
const TextBox8Cb = useTextBox8Cb()
const Input1Props = useStore((state)=>state["forms"]["Input1"]);
const Input1IoProps = useIoStore((state)=>state["forms"]["Input1"]);
const Input1Cb = useInput1Cb()
const TextBox22Props = useStore((state)=>state["forms"]["TextBox22"]);
const TextBox22IoProps = useIoStore((state)=>state["forms"]["TextBox22"]);
const TextBox22Cb = useTextBox22Cb()
const Link21Props = useStore((state)=>state["forms"]["Link21"]);
const Link21IoProps = useIoStore((state)=>state["forms"]["Link21"]);
const Link21Cb = useLink21Cb()
const Link22Props = useStore((state)=>state["forms"]["Link22"]);
const Link22IoProps = useIoStore((state)=>state["forms"]["Link22"]);
const Link22Cb = useLink22Cb()
const Link23Props = useStore((state)=>state["forms"]["Link23"]);
const Link23IoProps = useIoStore((state)=>state["forms"]["Link23"]);
const Link23Cb = useLink23Cb()
const Input2Props = useStore((state)=>state["forms"]["Input2"]);
const Input2IoProps = useIoStore((state)=>state["forms"]["Input2"]);
const Input2Cb = useInput2Cb()
const TextBox9Props = useStore((state)=>state["forms"]["TextBox9"]);
const TextBox9IoProps = useIoStore((state)=>state["forms"]["TextBox9"]);
const TextBox9Cb = useTextBox9Cb()
const Input3Props = useStore((state)=>state["forms"]["Input3"]);
const Input3IoProps = useIoStore((state)=>state["forms"]["Input3"]);
const Input3Cb = useInput3Cb()
const TextBox10Props = useStore((state)=>state["forms"]["TextBox10"]);
const TextBox10IoProps = useIoStore((state)=>state["forms"]["TextBox10"]);
const TextBox10Cb = useTextBox10Cb()
const TextBox12Props = useStore((state)=>state["forms"]["TextBox12"]);
const TextBox12IoProps = useIoStore((state)=>state["forms"]["TextBox12"]);
const TextBox12Cb = useTextBox12Cb()
const TextBox13Props = useStore((state)=>state["forms"]["TextBox13"]);
const TextBox13IoProps = useIoStore((state)=>state["forms"]["TextBox13"]);
const TextBox13Cb = useTextBox13Cb()
const TextBox14Props = useStore((state)=>state["forms"]["TextBox14"]);
const TextBox14IoProps = useIoStore((state)=>state["forms"]["TextBox14"]);
const TextBox14Cb = useTextBox14Cb()
const Checkbox3Props = useStore((state)=>state["forms"]["Checkbox3"]);
const Checkbox3IoProps = useIoStore((state)=>state["forms"]["Checkbox3"]);
const Checkbox3Cb = useCheckbox3Cb()
const Checkbox4Props = useStore((state)=>state["forms"]["Checkbox4"]);
const Checkbox4IoProps = useIoStore((state)=>state["forms"]["Checkbox4"]);
const Checkbox4Cb = useCheckbox4Cb()
const TextBox24Props = useStore((state)=>state["forms"]["TextBox24"]);
const TextBox24IoProps = useIoStore((state)=>state["forms"]["TextBox24"]);
const TextBox24Cb = useTextBox24Cb()
const Input4Props = useStore((state)=>state["forms"]["Input4"]);
const Input4IoProps = useIoStore((state)=>state["forms"]["Input4"]);
const Input4Cb = useInput4Cb()
const Button4Props = useStore((state)=>state["forms"]["Button4"]);
const Button4IoProps = useIoStore((state)=>state["forms"]["Button4"]);
const Button4Cb = useButton4Cb()
const Button5Props = useStore((state)=>state["forms"]["Button5"]);
const Button5IoProps = useIoStore((state)=>state["forms"]["Button5"]);
const Button5Cb = useButton5Cb()
const Button6Props = useStore((state)=>state["forms"]["Button6"]);
const Button6IoProps = useIoStore((state)=>state["forms"]["Button6"]);
const Button6Cb = useButton6Cb()

  return (<>
  <Flex2 className="p-forms Flex5 bpt" {...Flex5Props} {...Flex5Cb} {...Flex5IoProps}>
<Flex2 className="p-forms Flex12 bpt" {...Flex12Props} {...Flex12Cb} {...Flex12IoProps}>
<TextBox2 className="p-forms TextBox22 bpt" {...TextBox22Props} {...TextBox22Cb} {...TextBox22IoProps}/>
<Div2 className="p-forms Div13 bpt" {...Div13Props} {...Div13Cb} {...Div13IoProps}>
<Link2 className="p-forms Link21 bpt" {...Link21Props} {...Link21Cb} {...Link21IoProps}/>
<Link2 className="p-forms Link22 bpt" {...Link22Props} {...Link22Cb} {...Link22IoProps}/>
<Link2 className="p-forms Link23 bpt" {...Link23Props} {...Link23Cb} {...Link23IoProps}/>
</Div2>
</Flex2>
<TextBox2 className="p-forms TextBox7 bpt" {...TextBox7Props} {...TextBox7Cb} {...TextBox7IoProps}/>
<Div2 className="p-forms Div4 bpt" {...Div4Props} {...Div4Cb} {...Div4IoProps}>
<TextBox2 className="p-forms TextBox8 bpt" {...TextBox8Props} {...TextBox8Cb} {...TextBox8IoProps}/>
<Input className="p-forms Input1 bpt" {...Input1Props} {...Input1Cb} {...Input1IoProps}/>
</Div2>
</Flex2>
<Div2 className="p-forms Div5 bpt" {...Div5Props} {...Div5Cb} {...Div5IoProps}>
<TextBox2 className="p-forms TextBox9 bpt" {...TextBox9Props} {...TextBox9Cb} {...TextBox9IoProps}/>
<Input className="p-forms Input2 bpt" {...Input2Props} {...Input2Cb} {...Input2IoProps}/>
</Div2>
<Div2 className="p-forms Div6 bpt" {...Div6Props} {...Div6Cb} {...Div6IoProps}>
<TextBox2 className="p-forms TextBox10 bpt" {...TextBox10Props} {...TextBox10Cb} {...TextBox10IoProps}/>
<Input className="p-forms Input3 bpt" {...Input3Props} {...Input3Cb} {...Input3IoProps}/>
</Div2>
<Div2 className="p-forms Div7 bpt" {...Div7Props} {...Div7Cb} {...Div7IoProps}>
<TextBox2 className="p-forms TextBox13 bpt" {...TextBox13Props} {...TextBox13Cb} {...TextBox13IoProps}/>
<TextBox2 className="p-forms TextBox12 bpt" {...TextBox12Props} {...TextBox12Cb} {...TextBox12IoProps}/>
<Checkbox className="p-forms Checkbox3 bpt" {...Checkbox3Props} {...Checkbox3Cb} {...Checkbox3IoProps}/>
<TextBox2 className="p-forms TextBox14 bpt" {...TextBox14Props} {...TextBox14Cb} {...TextBox14IoProps}/>
<Checkbox className="p-forms Checkbox4 bpt" {...Checkbox4Props} {...Checkbox4Cb} {...Checkbox4IoProps}/>
</Div2>
<Div2 className="p-forms Div15 bpt" {...Div15Props} {...Div15Cb} {...Div15IoProps}>
<TextBox2 className="p-forms TextBox24 bpt" {...TextBox24Props} {...TextBox24Cb} {...TextBox24IoProps}/>
<Input className="p-forms Input4 bpt" {...Input4Props} {...Input4Cb} {...Input4IoProps}/>
</Div2>
<Div2 className="p-forms Div16 bpt" {...Div16Props} {...Div16Cb} {...Div16IoProps}>
<Button2 className="p-forms Button6 bpt" {...Button6Props} {...Button6Cb} {...Button6IoProps}/>
<Button2 className="p-forms Button5 bpt" {...Button5Props} {...Button5Cb} {...Button5IoProps}/>
<Button2 className="p-forms Button4 bpt" {...Button4Props} {...Button4Cb} {...Button4IoProps}/>
</Div2>
  </>);
}
