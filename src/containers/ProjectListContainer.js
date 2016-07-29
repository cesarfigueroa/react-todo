import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { removeProject } from '../actions/projects';
import ProjectList from '../components/ProjectList';

const mapStateToProps = state => {
  return {
    projects: state.get('projects').valueSeq()
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ removeProject }, dispatch);
};

const ProjectListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectList);

export default ProjectListContainer;
