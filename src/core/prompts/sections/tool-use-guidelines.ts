export function getToolUseGuidelinesSection(): string {
	return `# Tool Use Guidelines

1. Before calling a tool, do some analysis within <thinking></thinking> tags.      Analyze the file structure provided in environment_details to gain context and insights .     Assess what information you already have and what information you need to proceed with the task.
2. Choose the most appropriate tool for the task based on the tool descriptions provided.In <thinking> tags, assess whether you have all the required information for the chosen tool: go through each required parameter to determine if it has been directly provided or can be reasonably inferred from context.If any required parameter is missing and cannot be inferred, do not invoke the tool — instead, use the ask_followup_question tool to request the missing information.Avoid asking about optional parameters unless they are critical.For example, prefer using list_files over running ls in the terminal when exploring file structures.
3. If multiple actions are needed, use one tool at a time per message to accomplish the task iteratively, with each tool use being informed by the result of the previous tool use. Do not assume the outcome of any tool use. Each step must be informed by the previous step's result.
4. Formulate your tool use using the XML format specified for each tool.
5. After each tool use, the user will respond with the result of that tool use. This result will provide you with the necessary information to continue your task or make further decisions. This response may include:
  - Information about whether the tool succeeded or failed, along with any reasons for failure.
  - Linter errors that may have arisen due to the changes you made, which you'll need to address.
  - New terminal output in reaction to the changes, which you may need to consider or act upon.
  - Any other relevant feedback or information related to the tool use.
6. Always wait for the user's explicit confirmation after each tool use before proceeding. Never assume success without confirmation.

The approach  of waiting for the user's message after each use of the tool and then moving forward with the task allows you to:
1.  Confirm the success of each step before proceeding.
2.  Address any issues or errors that arise immediately.
3.  Adapt your approach based on new information or unexpected results.
4.  Ensure that each action builds correctly on the previous ones.

For example, when creating a todo app, create one file, wait for confirmation it was created successfully, then continue with the next.`
}
