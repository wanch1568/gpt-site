#!/usr/bin/env python
# -*- coding: utf-8 -*-

import sys
import openai
def chat():
    openai.api_key = '*************'
    completion = openai.ChatCompletion.create(
        model = 'gpt-3.5-turbo',
        messages = [
            {'role': 'user', 'content': sys.argv[1]},
            #{'role': 'assistant', 'content': 'わかりました'},
            #{'role': 'user', 'content': 'あなたの名前は？'},
        ],
        temperature = 0  
    )

    return completion['choices'][0]['message']['content']+" Total token:"+str((completion['usage']['total_tokens']))
def hello():
    return "hello"
if __name__ == "__main__":
    try:
        print(chat())
    except Exception as e:
        print(str(e))
