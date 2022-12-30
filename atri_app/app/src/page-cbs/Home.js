import { useCallback } from "react";
import { callbackFactory } from "../utils/callbackFactory";
export function useFlex2Cb() {
	const onClick = useCallback(callbackFactory("Flex2", "Home", "/Home", "onClick", 
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
export function useTextBox2Cb() {
	const onClick = useCallback(callbackFactory("TextBox2", "Home", "/Home", "onClick", 
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
export function useDiv3Cb() {
	const onClick = useCallback(callbackFactory("Div3", "Home", "/Home", "onClick", 
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
export function useLink2Cb() {

	return {  }
}
export function useLink3Cb() {

	return {  }
}
export function useLink5Cb() {

	return {  }
}
export function useFlex3Cb() {
	const onClick = useCallback(callbackFactory("Flex3", "Home", "/Home", "onClick", 
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
export function useTextBox3Cb() {
	const onClick = useCallback(callbackFactory("TextBox3", "Home", "/Home", "onClick", 
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
export function useTextBox4Cb() {
	const onClick = useCallback(callbackFactory("TextBox4", "Home", "/Home", "onClick", 
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
export function useButton1Cb() {
	const onClick = useCallback(callbackFactory("Button1", "Home", "/Home", "onClick", 
			{
  "handlers": [
    {
      "navigate": {
        "type": "internal",
        "url": "/forms"
      }
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