import * as stories from '../stories'
import * as gameCommands from '../utils/gameCommands'

const handleSubmit = (storyName, currentPage, command) => {
  const story = stories[storyName]
  const page = story[currentPage]
  const messages = []

  messages.push(getCommandResponse(story, page, command))

  if (page.message) {
    messages.push(page.message)
  }

  return {
    messages
  }
}

export default handleSubmit

const getCommandResponse = (story, page, command) => {
  const pageCommand = page.commands[command]
  const storyCommand = story.commands[command]
  const gameCommand = gameCommands[command]
  const defaultPageCommand = page.commands.default
  const defaultStoryCommand = story.commands.default
  const defaultGameCommand = gameCommands.default

  if (pageCommand) return pageCommand
  if (storyCommand) return storyCommand
  if (gameCommand) return gameCommand
  if (defaultPageCommand) return defaultPageCommand
  if (defaultStoryCommand) return defaultStoryCommand
  return defaultGameCommand
}
