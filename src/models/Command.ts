import { Schema, model, } from 'mongoose';
import { ICommand, } from '../interfaces/Command';

const commandSchema = new Schema<ICommand>({
  value: { type: String, required: true, },
  description: { type: String, required: true, },
  textAbout: String,
});

const Command = model<ICommand>('Command', commandSchema);

export default Command;
