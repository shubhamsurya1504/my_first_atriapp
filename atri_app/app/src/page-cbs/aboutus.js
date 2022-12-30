import { useCallback } from "react";
import { callbackFactory } from "../utils/callbackFactory";
export function useFlex4Cb() {
	const onClick = useCallback(callbackFactory("Flex4", "aboutus", "/aboutus", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useTextBox5Cb() {
	const onClick = useCallback(callbackFactory("TextBox5", "aboutus", "/aboutus", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useTextBox6Cb() {
	const onClick = useCallback(callbackFactory("TextBox6", "aboutus", "/aboutus", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useButton2Cb() {
	const onClick = useCallback(callbackFactory("Button2", "aboutus", "/aboutus", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useLink18Cb() {

	return {  }
}
export function useLink19Cb() {

	return {  }
}
export function useLink20Cb() {

	return {  }
}
export function useDiv12Cb() {
	const onClick = useCallback(callbackFactory("Div12", "aboutus", "/aboutus", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useTextBox21Cb() {
	const onClick = useCallback(callbackFactory("TextBox21", "aboutus", "/aboutus", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useFlex11Cb() {
	const onClick = useCallback(callbackFactory("Flex11", "aboutus", "/aboutus", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}