import os
import sys


class Compiler:
    def __init__(self, language):
        self.language = language

    def compile(self, code):
        if self.language == "c":
            return compile(code, "gcc")
        elif self.language == "c++":
            return compile(code, "g++")
        elif self.language == "java":
            return compile(code, "javac")
        elif self.language == "javascript":
            return compile(code, "node")
        elif self.language == "php":
            return compile(code, "php")
        elif self.language == "html":
            return compile(code, "html")
        elif self.language == "css":
            return compile(code, "css")
        elif self.language == "python":
            return compile(code, "python")
        else:
            raise ValueError("Unsupported language: {}".format(self.language))


class Interpreter:
    def __init__(self, language):
        self.language = language

    def interpret(self, code):
        if self.language == "c":
            return interpret(code, "gcc")
        elif self.language == "c++":
            return interpret(code, "g++")
        elif self.language == "java":
            return interpret(code, "javac")
        elif self.language == "javascript":
            return interpret(code, "node")
        elif self.language == "php":
            return interpret(code, "php")
        elif self.language == "html":
            return interpret(code, "html")
        elif self.language == "css":
            return interpret(code, "css")
        elif self.language == "python":
            return interpret(code, "python")
        else:
            raise ValueError("Unsupported language: {}".format(self.language))


def main():
    language = input("Select a language: ")
    code = input("Enter your code: ")

    compiler = Compiler(language)
    result = compiler.compile(code)
    if result.errors:
        print(result.errors)
    else:
        interpreter = Interpreter(language)
        output = interpreter.interpret(result.output)
        print(output)


if __name__ == "__main__":
    main()
