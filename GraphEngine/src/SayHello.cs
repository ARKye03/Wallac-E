using mini_compiler;
namespace GraphEngine;

public class Hello
{
  public static string Main(string sourceCode)
  {
    // Source code does not end with ';'
    if (!sourceCode.EndsWith(";"))
    {
      return $"Expected ';' at column {sourceCode.Length}.";
    }
    return RunInterpreter(sourceCode);

  }
  private static string RunInterpreter(string sourceCode)
  {
    using var sw = new StringWriter();
    Console.SetOut(sw);
    Test(sourceCode);
    return sw.ToString().Trim();
  }
  public static void Test(string sourceCode)
  {
    // Run interpreter
    Interpreter interpreter = new(sourceCode!);
    try { interpreter.Run(); } catch (Exception) { }
  }

}
